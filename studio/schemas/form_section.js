export default {
    "type": "object",
    "name": "form_section",
    "title": "Form Section",
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
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the section",
            "validation": null
        },
        {
            "type": "string",
            "name": "form_id",
            "title": "Form ID",
            "description": "A unique identifier of the form, must not contain whitespace",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "form_action",
            "title": "Form action",
            "description": "The path of your custom \"success\" page, if you want to replace the default success message",
            "validation": null
        },
        {
            "type": "array",
            "name": "form_fields",
            "title": "Form fields",
            "validation": null,
            "of": [
                {
                    "type": "form_field"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "hide_labels",
            "title": "Hide form field labels",
            "validation": null
        },
        {
            "type": "string",
            "name": "submit_label",
            "title": "Submit button label",
            "validation": Rule => Rule.required()
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
                    "form_section"
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