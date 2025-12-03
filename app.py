from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# List of mystical fortunes
fortunes = [
    "The stars align in your favor... great success awaits you.",
    "Beware the shadows... a challenge approaches soon.",
    "Your destiny is intertwined with unexpected friendship.",
    "The crystal reveals... prosperity flows toward you.",
    "Ancient wisdom whispers: patience brings rewards.",
    "A mysterious stranger will change your path.",
    "The moon's power grows... your intuition is strong.",
    "Three paths lie ahead... choose wisely, traveler.",
    "Fortune favors the bold... take the leap of faith.",
    "The spirits say: your creativity will unlock new doors.",
    "Darkness before dawn... persist through difficulty.",
    "A hidden talent will soon reveal itself to you.",
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get-fortune')
def get_fortune():
    fortune = random.choice(fortunes)
    return jsonify({'fortune': fortune})

if __name__ == '__main__':
    app.run(debug=True)