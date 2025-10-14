# Gmail with Python

Getting into Gmail with Python.

Use a testing account.

Simple way: (the way 3rd party clients like Thunderbird do it.)
- SMTP (comms between servers) `smtplib` is builtin
- POP3 (read only from email server) `poplib` is builtin
- IMAP (read/write with email server) `imaplib` is builtin
  - `email` python library/parser

Complex way: [Gmail API with Google Cloud](https://developers.google.com/gmail/api/guides) (good luck)

Warning: Don't hardcode tokens and keys. ([how to handle secrets](./dealing_with_secrets.md))

Config:
- [List of Servers/Subdomains for Major Email Providers](https://www.systoolsgroup.com/imap/) (`imap.gmail.com`)
- username/email `youremail@example.com`
- password: Special "App Password"
  - You will need to click around in your account

## IMAP

```py
import os
from dotenv import load_dotenv
load_dotenv('.env')
username = os.getenv('USERNAME')
password = os.getenv('PASSWORD')

import imaplib

server = 'imap.gmail.com'
imap = imaplib.IMAP4_SSL(server)
imap.login(email, password)
```

```py
print(imap.list()) # lists mailboxes
status, messages = imap.select(mailbox="INBOX",readonly=True)
```

Emails on the server are assinged sequential IDs. Starting from 1.

```py
msg_uid = 10
status, msg = imap.fetch(str(msg_uid),'(RFC822)') # no clue why RFC822
# msg
#  0: msg itself
#  1: (uid, data)

import email
data = msg[1][1]
m = email.message_from_bytes(data)

print(m.get_payload())
```

#### Glossary

`NOOP` command (`imap.noop()`) is a test packet. Similar to a ping.

MIME is [Multipurpose Internet Mail Extensions](https://en.wikipedia.org/wiki/MIME)

### Header Fields

`['Delivered-To', 'Received', 'X-Received', 'ARC-Seal', 'ARC-Message-Signature', 'ARC-Authentication-Results', 'Return-Path', 'Received', 'Received-SPF', 'Authentication-Results', 'DKIM-Signature', 'X-Google-DKIM-Signature', 'X-Gm-Message-State', 'X-Google-Smtp-Source', 'MIME-Version', 'X-Received', 'Date', 'X-Account-Notification-Type', 'Feedback-ID', 'X-Notifications', 'X-Notifications-Bounce-Info', 'Message-ID', 'Subject', 'From', 'To', 'Content-Type']`

| Key | Description | Example |
| - | - | - |
| `Subject` | Subject line of the Email | "Shedule for Meeting" |
| `From` | Sender Email Address | sender-email@example.com |
| `To` | Recipient Email Address | recipient-email@example.com |
| `Date` | Date in Long Format with time zone | Sun, 19 Jan 2025 00:11:46 GMT |
| | **More Obscure Fields** | |
| `Content-Type` | Media Type ([Full List](https://www.iana.org/assignments/media-types/media-types.xhtml))<br/>boundary<br/>charset | `text/plain` |
| `Received` | by [IPv6] with [Protocol] id [alphanumberic] | |
| `Delivered-To` | Recipient Email Address | recipient-email@example.com |

### Dealing with Multipart Emails

Content-Type: `multipart/alternative`, `mutlipart/mixed`, [etc.](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

Multipart Emails contain multiple parts with different types. And many email providers/clients don't bother minimizing the type, just always use the universal multipart.

`.is_multipart()`

Iterator: Warning! first object is parent itself!
- `.walk()` generator object to iteratre through all message parts.

"part" object:
- `.get_content_type()` (get subtype)
- `.is_multipart()` (can be nested)

### Attachments

### Actions

FLAGS:
- [Marking Read/Unread](https://stackoverflow.com/a/67319328)
