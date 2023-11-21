export const META = {
  "title": "Yoasu Personal Website",
  "description": "Provider Information About myself, projects, and others",
  "meta": [

  ]
}


export const SECTIONS = [
    {
      "name": "Introduction",
      "styling": {
        "style": {},
        "class": [],
      },
      "params": {
        "title": "Welcome to My Personal Website, Fellas!",
        "description": "",
        "styling": {
          "style": {},
          "class": [],
        },
        "sections": [
          {
            "name": "social-media",
            "styling": {
              "style": {},
              "class": [],
            },
            "params": {
              "title": "",
              "items": [
                {
                  "name": "facebook",
                  "url": "https://www.facebook.com/manwithoutconfusion/",
                },
                {
                  "name": "twitter",
                  "url": "https://twitter.com/agung96tm",
                },
                {
                  "name": "github",
                  "url": "https://github.com/agung96tm",
                },
                {
                  "name": "linkedin",
                  "url": "https://www.linkedin.com/in/agung96tm/",
                }
              ]
            },
          },
        ]
      },
    },
    {
      "name": "Project",
      "styling": {
        "style": {},
        "class": [],
      },
      "params": {
        "title": "My Projects",
        "sources": {
          "github": {
            "url": "https://api.github.com/users/agung96tm/repos",
            "show_repositories": ["", "", "", ""],
            "styling": {
              "style": {},
              "class": [],
            },
          }
        },
      }
    },
    {
      "name": "Blog",
      "styling": {
        "style": {},
        "class": [],
      },
      "params": {
        "title": "Posts",
        "sources": {
          "github": {
            "url": "https://medium.com/feed/@agung96tm",
            "limit": 5,
            "styling": {
              "style": {},
              "class": [],
            },
          }
        }
      }
    },
]