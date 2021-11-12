from mongoengine import Document ,IntField ,ListField, StringField, document

class leagues(Document):
    fieldId= IntField(db_field='id', unique=True)
    image= StringField()
    name= StringField()
