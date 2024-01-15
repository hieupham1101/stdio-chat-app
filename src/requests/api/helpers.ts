/* eslint-disable @typescript-eslint/no-explicit-any */
import { is } from 'ramda'

import type { AxiosError, AxiosResponse } from 'axios'

// import type { IErrorProps } from './interfaces';

function camelize(str: string): string {
  return str?.replace(/^([A-Z])|[\s-_/]+(\w)/g, (_match, p1, p2) => {
    if (p2) {
      return p2.toUpperCase()
    }

    return p1.toLowerCase()
  })
}

function camelizeKeys(data: any): any {
  if (is(Date, data) || !is(Object, data)) {
    return data
  }

  if (Array.isArray(data)) {
    return data.map((datum) => {
      return camelizeKeys(datum)
    })
  }

  return Object.entries(data).reduce((result, [k, v]) => {
    let value

    if (is(Date, v) || !is(Object, v)) {
      value = v
    } else {
      value = camelizeKeys(v)
    }

    Object.assign(result, {
      [camelize(k)]: value
    })

    return result
  }, {})
}

export function parseData({ data, hasMeta }: AxiosResponse & { hasMeta: boolean }): any {
  const hasDataWrapper = Object.prototype.hasOwnProperty.call(data, 'data')

  if (hasMeta && hasDataWrapper) {
    return {
      data: camelizeKeys(data.data),
      meta: data.meta
    }
  }

  if (hasMeta) {
    return {
      data: camelizeKeys(data),
      meta: data.meta
    }
  }

  if (hasDataWrapper) {
    return camelizeKeys(data.data)
  }

  return camelizeKeys(data)
}

export function parseError(error: AxiosError): Promise<any> {
  const { name, message, response, config } = error
  const { data, status = 500 } = response || {}
  const isNetworkError = name === 'Error' && message === 'Network Error'
  if (config?.url !== '/login' && response?.status === 401) {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  return Promise.reject({
    name,
    data,
    status,
    message,
    isNetworkError
  })
}
