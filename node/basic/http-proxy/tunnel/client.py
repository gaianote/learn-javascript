import requests

proxies = {
  'http': 'http://127.0.0.1:8888',
  'https': 'http://127.0.0.1:8888',
}

r = requests.get('https://httpbin.org/get?show_env=1', proxies=proxies)
print(r.text)
input()