from flask import Blueprint, jsonify

designers_api = Blueprint('designers_api', __name__)

designers = [
    {
        "id": 1,
        "name": "Epic Designs",
        "description": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "projects": 57,
        "years": 8,
        "price": "$$",
        "phone1": "+91 - 984532853",
        "phone2": "+91 - 984532854"
    },
    {
        "id": 2,
        "name": "Studio - D3",
        "description": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
        "projects": 43,
        "years": 6,
        "price": "$$$",
        "phone1": "+91 - 984532853",
        "phone2": "+91 - 984532854"
    }
]

@designers_api.route('/api/designers')
def get_designers():
    return jsonify(designers)
