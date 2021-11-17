from mongoengine import Document , IntField, ListField, StringField, BinaryField

class players(Document):
    fieldId= IntField(db_field='id', unique=True)
    club= IntField()
    league= IntField()
    nation= IntField()
    name= StringField()
    height= IntField()
    weight= IntField()
    age= IntField()    
    pace= IntField()
    shooting= IntField()
    passing= IntField()
    dribbling= IntField()
    defending= IntField()
    image= BinaryField()
