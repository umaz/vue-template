import axios from 'axios'

export const getTime = async () => {
  const res = await axios.get('https://ntp-a1.nict.go.jp/cgi-bin/json')
  return res.data.st
}