import requests
import json
import pprint

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36'
}

url = 'https://www.dcard.tw/service/api/v2/forums/photography/posts?limit=30&before=235214594'

res = requests.get(url, headers=headers)

# print(res.text)
# jsonData = json.loads(res.text) # list
# # for i in jsonData:
# #     print(i)
# pprint.pprint(jsonData[0])
