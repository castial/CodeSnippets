import requests

if __name__ == "__main__":
    target = 'https://unsplash.com/napi/feeds/home'
    req = requests.get(url=target, verify=False)
    print(req.text)