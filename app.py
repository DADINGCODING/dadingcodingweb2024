from flask import Flask, request, jsonify
from t import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    # 임시로 username이 'admin'이고 password가 'password'일 때 로그인 성공으로 처리
    if username == 'admin' and password == 'password':
        return jsonify({"success": True, "message": "Login successful"}), 200
    else:
        return jsonify({"success": False, "message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)