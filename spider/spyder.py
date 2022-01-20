import requests
from bs4 import BeautifulSoup
import random
from scraper import Scraper
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore



cred = credentials.Certificate("scholarshipfinder-fb492-firebase-adminsdk-illqy-420776f0f9.json")
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()

# find and store all links on page





# scrape data on current page

# go to next url




