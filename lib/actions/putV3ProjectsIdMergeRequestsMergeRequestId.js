/**
 * Auto-generated action file for "Gitlab" API.
 *
 * Generated at: 2019-05-07T14:41:02.349Z
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
 * Operation: 'putV3ProjectsIdMergeRequestsMergeRequestId'
 * Endpoint Path: '/v3/projects/{id}/merge_requests/{merge_request_id}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id",
    "merge_request_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "merge_request_id": "merge_request_id",
    "title": "title",
    "target_branch": "target_branch",
    "state_event": "state_event",
    "description": "description",
    "assignee_id": "assignee_id",
    "milestone_id": "milestone_id",
    "labels": "labels",
    "remove_source_branch": "remove_source_branch",
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
        operationId: 'putV3ProjectsIdMergeRequestsMergeRequestId',
        pathName: '/v3/projects/{id}/merge_requests/{merge_request_id}',
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