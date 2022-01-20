import requests
from bs4 import BeautifulSoup
import random
from scraper import Scraper
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class Spider:
    def __init__(self, starting_url):
        self.starting_url = starting_url
        cred = credentials.Certificate("scholarshipfinder-fb492-firebase-adminsdk-illqy-420776f0f9.json")
        self.default_app = firebase_admin.initialize_app(cred)
        self.db = firestore.client()
        self.url_to_scrape_list = []

    # start crawling process
    def start(self):
        self.crawl()

    # Scrape single page
    def scrape(self, url):
        pass

    # Move to next link
    def crawl(self, url):
        if not self.has_been_crawled(url):
            pass

            
    def has_been_crawled(self, url):
        pass
