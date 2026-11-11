"""
ARISE 39081 - Ams Robotics Innovation Science Engineering
Web Server powered by Flask
"""

import os
from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

@app.route('/api/team-info')
def get_team_info():
    return jsonify({
        "teamNumber": 39081,
        "teamName": "ARISE",
        "competition": "FIRST Tech Challenge (FTC)",
        "school": "Hanoi - Amsterdam High School for Gifted",
        "slogan": "When I say Ams, you say Rise!",
        "divisions": [
            {"id": "mech", "name_en": "Mechanical & CAD", "name_vi": "Cơ khí & Thiết kế CAD", "members": 8},
            {"id": "prog", "name_en": "Software & AI", "name_vi": "Lập trình & Thị giác AI", "members": 7},
            {"id": "elec", "name_en": "Electronics & Wiring", "name_vi": "Điện tử & Điều khiển", "members": 5},
            {"id": "outreach", "name_en": "Outreach & Business", "name_vi": "Truyền thông & Đối ngoại", "members": 6}
        ],
        "robot": {
            "name": "PHOENIX PRIME v2.4",
            "drivetrain": "4-Wheel Mecanum 96mm GoBilda Strafer",
            "odometry": "3-Wheel Dead-Wheel Odometry Pods",
            "controllers": "REV Robotics Control Hub + Expansion Hub",
            "vision": "OpenCV AI Tracking (Color & AprilTag Detection)",
            "speed": "2.8 m/s",
            "liftHeight": "1.8 m",
            "cycleTime": "2.2 s"
        },
        "alliance": {
            "sisterTeam": "GreenAms Robotics Team (GART)",
            "sisterTeamNumber": 24751,
            "sisterSlogan": "When I say Green, you say Ams!",
            "season": "FTC 2025–2026: DECODE",
            "communityRobot": "Bamboo Bot (First Open-Source FTC Robot in Vietnam)",
            "worldAchievements": "FIRST World Championship Finalist Alliance & Edison Division Champions (Houston 2025)",
            "keySponsors": ["MCC Semi", "Geleximco", "CMC Telecom", "Qualcomm", "APAC", "Molex"],
            "leadership": {
                "headCoach": {"name": "Nguyen Hai Dang", "email": "ngnhaidangvn@gmail.com", "phone": "(+84) 968 228 118"},
                "manager": {"name": "Nguyen Thanh Tung", "email": "tungnt@hnams.edu.vn", "phone": "(+84) 968 666 245"}
            }
        }
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    print(f"🚀 ARISE 39081 Robotics Portal starting on http://127.0.0.1:{port}")
    app.run(host='0.0.0.0', port=port, debug=False)
