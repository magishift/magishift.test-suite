# Magishift Autotesting

Focus on your code, and write API testing only by defining simple config format.

# How to Run [TODO]

# Sample Config

```json
[
  {
    "scenario": "Example Authentication Section.",
    "testCase": [
      {
        "method": "POST",
        "model": "admin/login",
        "withData": {
          "username": "admin",
          "password": "admin"
        },
        "expect": 200,
        "description": "should respond 200 when Login as Admin POST at /admin/login"
      }
    ]
  }
]
```
