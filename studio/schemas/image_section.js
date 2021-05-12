export default {
    "type": "object",
    "name": "image_section",
    "title": "Image Section",
    "fields": [
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image Alt Text",
            "description": "The alt text of the section image",
            "validation": null
        },
        {
            "type": "string",
            "name": "caption",
            "title": "Caption",
            "description": "The caption of the image",
            "validation": null
        },
        {
            "type": "string",
            "name": "width",
            "title": "Width",
            "description": "The width of the image",
            "initialValue": "regular",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "regular",
                    "wide"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "image_section"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "image_alt"
        }
    }
}