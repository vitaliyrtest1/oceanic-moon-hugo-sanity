// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import header from './header.js';
import footer from './footer.js';
import advanced from './advanced.js';
import blog from './blog.js';
import portfolio from './portfolio.js';
import page from './page.js';
import post from './post.js';
import project from './project.js';
import hero_section from './hero_section.js';
import content_section from './content_section.js';
import cta_section from './cta_section.js';
import grid_section from './grid_section.js';
import grid_item from './grid_item.js';
import portfolio_section from './portfolio_section.js';
import posts_section from './posts_section.js';
import testimonials_section from './testimonials_section.js';
import testimonial from './testimonial.js';
import form_section from './form_section.js';
import form_field from './form_field.js';
import text_section from './text_section.js';
import image_section from './image_section.js';
import action from './action.js';
import stackbit_page_meta from './stackbit_page_meta.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    header,
    footer,
    advanced,
    blog,
    portfolio,
    page,
    post,
    project,
    hero_section,
    content_section,
    cta_section,
    grid_section,
    grid_item,
    portfolio_section,
    posts_section,
    testimonials_section,
    testimonial,
    form_section,
    form_field,
    text_section,
    image_section,
    action,
    stackbit_page_meta
    ])
})
