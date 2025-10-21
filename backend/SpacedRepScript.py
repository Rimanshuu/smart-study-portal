from datetime import datetime, timedelta
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import os
import pickle

# Define OAuth Scopes
SCOPES = ["https://www.googleapis.com/auth/calendar"]

# Authenticate using OAuth 2.0 and save credentials
def authenticate():
    creds = None
    token_file = "token.pickle"

    # Load credentials if they exist
    if os.path.exists(token_file):
        with open(token_file, "rb") as token:
            creds = pickle.load(token)

    # If no valid credentials, log in again
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())  # Refresh expired token
        else:
            flow = InstalledAppFlow.from_client_secrets_file("credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
            # Save credentials for next time
            with open(token_file, "wb") as token:
                pickle.dump(creds, token)

    return build("calendar", "v3", credentials=creds)

# Function to add an event to Google Calendar
def add_event(service, summary, date):
    event = {
        "summary": summary,
        "start": {"date": date},
        "end": {"date": date},
        "reminders": {"useDefault": True},
    }
    event = service.events().insert(calendarId="primary", body=event).execute()
    print(f"Event created: {event.get('htmlLink')}")

# Function to schedule spaced repetition reminders
def schedule_repetitions(service, topic):
    today = datetime.today().date()
    intervals = [1, 3, 7, 14, 30]  # 1 day, 3rd day, 1 week, 2 weeks, 1 month
    for days in intervals:
        review_date = today + timedelta(days=days)
        add_event(service, f"Review: {topic}", review_date.isoformat())

if __name__ == "__main__":
    service = authenticate()
    topic = input("Enter today's learned topic: ")
    schedule_repetitions(service, topic)