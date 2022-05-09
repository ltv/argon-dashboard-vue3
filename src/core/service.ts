import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios'
import env from './env'
import { AUTH_TOKEN, VITE_SERVICE_ENDPOINT } from './constants'

// axios
axios.defaults.headers.post['Content-Type'] = 'application/json'

export interface ServiceOptions {
  namespace?: string
  service?: 'getInfoApi' | 'api'
}

export default class Service {
  private axios: AxiosInstance

  private headers: any
  private defaultOptions: ServiceOptions = {
    namespace: undefined,
    service: undefined,
  }
  private token: string | null

  /**
   * Creates an instance of Service.
   *
   * @memberOf Service
   */
  constructor(options?: ServiceOptions) {
    this.defaultOptions = { ...this.defaultOptions, ...options }
    const { namespace = null, service = 'api' } = this.defaultOptions

    // Accept */*
    axios.defaults.headers.common.Accept = '*/*'
    const endpoint = env(VITE_SERVICE_ENDPOINT, '')

    const baseURL = endpoint + (namespace ? `/${namespace}/` : '/')

    this.token = localStorage.getItem(AUTH_TOKEN)

    const headers = {
      // 'Access-Control-Allow-Origin': '*',
      'token-source': 'firebase',
      Authorization: this.token ? `Bearer ${this.token}` : '',
    }

    this.axios = axios.create({
      baseURL,
      responseType: 'json',
      headers,
    })
  }

  public withHeader(headers: any): Service {
    this.headers = headers
    return this
  }

  public toQueryString(obj: any) {
    const parts = []
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
      }
    }
    return parts.join('&')
  }

  /**
   * Call a service action via REST API
   *
   * @param {any} action  name of action
   * @param {any} params  parameters to request
   * @returns  {Promise}
   *
   * @memberOf Service
   */
  public async rest(
    action: string,
    params?: any,
    options = {
      headers: {},
      method: 'post',
    },
  ) {
    const { headers } = options
    try {
      const opts: AxiosRequestConfig = {
        url: action,
        method: options.method as Method,
        data: params,
        headers: {
          ...(this.headers || {}),
          ...headers,
        },
      }
      const response = await this.axios.request(opts)
      return response.data
    } catch (err: any) {
      throw err.response
    }
  }

  public postFormData(action: string, data: any) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    return this.rest(action, data, {
      method: 'post',
      headers,
    })
  }

  public get(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    const query = this.toQueryString(params)
    const path = query ? `${action}?${query}` : action
    return this.rest(
      path,
      {},
      {
        method: 'get',
        headers,
      },
    )
  }

  public delete(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    const query = this.toQueryString(params)
    const path = query ? `${action}?${query}` : action
    return this.rest(
      path,
      {},
      {
        method: 'delete',
        headers,
      },
    )
  }

  public post(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'post',
      headers,
    })
  }

  public put(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'put',
      headers,
    })
  }

  public patch(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'patch',
      headers,
    })
  }

  public uploadWithPreSignedUrl(
    input: {
      url: string
      contentType: string
      file: File
    },
    config: { [key: string]: any },
  ) {
    const { url, contentType, file } = input
    return axios.put(url, file, {
      headers: { 'Content-Type': contentType },
      ...config,
    })
  }
}
