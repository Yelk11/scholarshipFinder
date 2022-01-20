from bs4 import BeautifulSoup
import requests
import re
import random
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class Scraper:

    def __init__(self, url, ):

        qual_list = ['no essay', 'essay','student', 'non student', 'incoming freshman','full time', 'part time' ]

        
        UAS = ("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1", 
            "Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0",
            "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36",
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
        )

        ua = UAS[random.randrange(len(UAS))]
        headers = {'user-agent': ua}

        self.url = url
        self.soup = BeautifulSoup(requests.get(url, headers=headers).content, "html.parser")

    def get_amount(self):
        amount_list = self.soup.find_all(['strong','p', 'h1', 'h2', 'h3', 'span', 'b'])
        results = re.search('\$\d+(,|\d)\d+', str(amount_list))
        if results:
            return results.group(0)
        return None
        
    def get_title(self):
        return self.url.rsplit('/', 1)[-1]
    def get_requirements(self):
        pass
    def get_deadline(self):
        pass
    def get_organization(self):
        return re.findall('://([\w\-\.]+)', self.url)

    def extract_urls(self) -> list:
        return self.soup.find_all('a')

# url_list = [
#     'https://www.nitrocollege.com/nitro-scholarship-application',
#     'https://calvinrosser.com/scholarships/buena-amistad-scholarship/', # no
#     'https://joinjuno.com/scholarship/january-2022-scholarship', # no
#     'https://www.keepgoingforward.org/money-isnt-everything',
#     'https://calvinrosser.com/scholarships/financial-freedom/',# no
#     'https://calvinrosser.com/scholarships/a-bold-life-scholarship/', # no
#     'https://www.nitrocollege.com/nitro-scholarship-application/1k',
#     'https://calvinrosser.com/scholarships/a-green-world-scholarship/', # no
#     'https://www.mymozaic.com/monthlyscholarship.php'
# ]

# for url in url_list:
#     test = Scraper(url)
#     print('<--------- Sholarship ------------->')
#     print(test.get_title())
#     print(test.get_amount())
#     # print(test.get_requirements())
#     print(test.get_organization())
#     print()
#     print()
