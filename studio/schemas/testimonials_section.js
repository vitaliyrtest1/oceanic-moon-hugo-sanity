export default {
    "type": "object",
    "name": "testimonials_section",
    "title": "Testimonials Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "ID",
            "description": "A unique identifier of the section, must not contain whitespace",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section",
            "validation": null
        },
        {
            "type": "array",
            "name": "testimonials",
            "title": "Testimonials",
            "validation": null,
            "of": [
                {
                    "type": "testimonial"
                }
            ]
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
                    "testimonials_section"
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
            "title": "title"
        }
    }
}