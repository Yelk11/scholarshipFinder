import firebase_admin

cred_obj = firebase_admin.credentials.Certificate("C:\\Users\\Gibby\\Github\\scholarship\\ScholarshipFinder\\src\\components\\CustomInput\\google-service.json")
default_app = firebase_admin.initialize_app(cred_object, {
	'https://scholarshipfinder-fb492-default-rtdb.firebaseio.com/':databaseURL
	})
