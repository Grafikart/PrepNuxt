export default function ({ $axios }) {
  $axios.defaults.headers.common['Content-Type'] = 'application/json'
  $axios.defaults.headers.common['Accept'] = 'application/json'
}
