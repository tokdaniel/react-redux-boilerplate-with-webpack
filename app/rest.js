export default class Rest {

    static proxyAddress = 'http://ip.jsontest.com/';

    static get(url, params = {}) {
        return Rest._send(url, params, { method: 'get' });
    }

    post(url, params = {}) {
        return this._send(url, params, { method: 'post' });
    }

    put(url, params = {}) {
        return this._send(url, params, { method: 'put' });
    }

    options(url, params = {}) {
        return this._send(url, params, { method: 'options' });
    }

    patch(url, params = {}) {
        return this._send(url, params, { method: 'patch' });
    }

    static async _send(url, params, options) {
        const queryParams = this._encodeQueryData({ ...params, format: 'json' });

        try {
            const response = await fetch(`${this.proxyAddress}/${url}?${queryParams}`, options);

            if (!response.ok) {
                /* Better error handling required. */
                throw new Error('Service unavailable');
            }

            return response.json();
        } catch (error) {
            console.error(error.message);
        }
    }

    static _encodeQueryData(data) {
        const ret = [];
        for (const d of Object.keys(data)) {
            if (data.hasOwnProperty(d)) {
                ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`);
            }
        }
        return ret.join('&');
    }
}