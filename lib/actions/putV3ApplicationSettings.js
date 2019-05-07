/**
 * Auto-generated action file for "Gitlab" API.
 *
 * Generated at: 2019-05-07T14:41:02.312Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / gitlab-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putV3ApplicationSettings'
 * Endpoint Path: '/v3/application/settings'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "default_branch_protection": "default_branch_protection",
    "default_project_visibility": "default_project_visibility",
    "default_snippet_visibility": "default_snippet_visibility",
    "default_group_visibility": "default_group_visibility",
    "restricted_visibility_levels": "restricted_visibility_levels",
    "import_sources": "import_sources",
    "disabled_oauth_sign_in_sources": "disabled_oauth_sign_in_sources",
    "enabled_git_access_protocol": "enabled_git_access_protocol",
    "gravatar_enabled": "gravatar_enabled",
    "default_projects_limit": "default_projects_limit",
    "max_attachment_size": "max_attachment_size",
    "session_expire_delay": "session_expire_delay",
    "user_oauth_applications": "user_oauth_applications",
    "user_default_external": "user_default_external",
    "signup_enabled": "signup_enabled",
    "send_user_confirmation_email": "send_user_confirmation_email",
    "domain_whitelist": "domain_whitelist",
    "domain_blacklist_enabled": "domain_blacklist_enabled",
    "domain_blacklist": "domain_blacklist",
    "after_sign_up_text": "after_sign_up_text",
    "signin_enabled": "signin_enabled",
    "require_two_factor_authentication": "require_two_factor_authentication",
    "two_factor_grace_period": "two_factor_grace_period",
    "home_page_url": "home_page_url",
    "after_sign_out_path": "after_sign_out_path",
    "sign_in_text": "sign_in_text",
    "help_page_text": "help_page_text",
    "shared_runners_enabled": "shared_runners_enabled",
    "shared_runners_text": "shared_runners_text",
    "max_artifacts_size": "max_artifacts_size",
    "container_registry_token_expire_delay": "container_registry_token_expire_delay",
    "metrics_enabled": "metrics_enabled",
    "metrics_host": "metrics_host",
    "metrics_port": "metrics_port",
    "metrics_pool_size": "metrics_pool_size",
    "metrics_timeout": "metrics_timeout",
    "metrics_method_call_threshold": "metrics_method_call_threshold",
    "metrics_sample_interval": "metrics_sample_interval",
    "metrics_packet_size": "metrics_packet_size",
    "sidekiq_throttling_enabled": "sidekiq_throttling_enabled",
    "sidekiq_throttling_queus": "sidekiq_throttling_queus",
    "sidekiq_throttling_factor": "sidekiq_throttling_factor",
    "recaptcha_enabled": "recaptcha_enabled",
    "recaptcha_site_key": "recaptcha_site_key",
    "recaptcha_private_key": "recaptcha_private_key",
    "akismet_enabled": "akismet_enabled",
    "akismet_api_key": "akismet_api_key",
    "admin_notification_email": "admin_notification_email",
    "sentry_enabled": "sentry_enabled",
    "sentry_dsn": "sentry_dsn",
    "repository_storage": "repository_storage",
    "repository_checks_enabled": "repository_checks_enabled",
    "koding_enabled": "koding_enabled",
    "koding_url": "koding_url",
    "plantuml_enabled": "plantuml_enabled",
    "plantuml_url": "plantuml_url",
    "version_check_enabled": "version_check_enabled",
    "email_author_in_body": "email_author_in_body",
    "html_emails_enabled": "html_emails_enabled",
    "housekeeping_enabled": "housekeeping_enabled",
    "housekeeping_bitmaps_enabled": "housekeeping_bitmaps_enabled",
    "housekeeping_incremental_repack_period": "housekeeping_incremental_repack_period",
    "housekeeping_full_repack_period": "housekeeping_full_repack_period",
    "housekeeping_gc_period": "housekeeping_gc_period",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/x-www-form-urlencoded';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['private_token_header'] = cfg['private_token_header'];
    securities['private_token_query'] = cfg['private_token_query'];

    let callParams = {
        spec: spec,
        operationId: 'putV3ApplicationSettings',
        pathName: '/v3/application/settings',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}