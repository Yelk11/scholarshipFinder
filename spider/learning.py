
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("scholarshipfinder-fb492-firebase-adminsdk-illqy-420776f0f9.json")
default_app = firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection(u'users').document(u'alovelace')
doc_ref.set({
    u'first': u'Ada',
    u'last': u'Lovelace',
    u'born': 1815
})