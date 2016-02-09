import {connectionDefinitions} from 'graphql-relay';

export const resolveMap = {
    'QaBlob': {
        'name': 'QaBlob',
        'table': 'qa_blobs',
        'primaryKey': 'blobid',

        'aliases': {
            'blobid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaCache': {
        'name': 'QaCache',
        'table': 'qa_cache',
        'primaryKey': 'cacheid',

        'aliases': {
            'type': 'id',
            'cacheid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaCategory': {
        'name': 'QaCategory',
        'table': 'qa_categories',
        'primaryKey': 'categoryid',

        'aliases': {
            'categoryid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaCategorymeta': {
        'name': 'QaCategorymeta',
        'table': 'qa_categorymetas',
        'primaryKey': 'title',

        'aliases': {
            'categoryid': 'id',
            'title': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaContentword': {
        'name': 'QaContentword',
        'table': 'qa_contentwords',
        'primaryKey': null,

        'aliases': {
            'type': 'qaContentwordsType'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaCooky': {
        'name': 'QaCooky',
        'table': 'qa_cookies',
        'primaryKey': 'cookieid',

        'aliases': {
            'cookieid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaIplimit': {
        'name': 'QaIplimit',
        'table': 'qa_iplimits',
        'primaryKey': 'action',

        'aliases': {
            'ip': 'id',
            'action': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaMessage': {
        'name': 'QaMessage',
        'table': 'qa_messages',
        'primaryKey': 'messageid',

        'aliases': {
            'messageid': 'id',
            'type': 'qaMessagesType'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaNpEvent': {
        'name': 'QaNpEvent',
        'table': 'qa_np_event',
        'primaryKey': 'eventid',

        'aliases': {
            'eventid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaNpMail': {
        'name': 'QaNpMail',
        'table': 'qa_np_mail',
        'primaryKey': 'mailid',

        'aliases': {
            'mailid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaPost': {
        'name': 'QaPost',
        'table': 'qa_posts',
        'primaryKey': 'postid',

        'aliases': {
            'postid': 'id',
            'type': 'qaPostsType'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaPage': {
        'name': 'QaPage',
        'table': 'qa_pages',
        'primaryKey': 'pageid',

        'aliases': {
            'pageid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaOption': {
        'name': 'QaOption',
        'table': 'qa_options',
        'primaryKey': 'title',

        'aliases': {
            'title': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaPostmeta': {
        'name': 'QaPostmeta',
        'table': 'qa_postmetas',
        'primaryKey': 'title',

        'aliases': {
            'postid': 'id',
            'title': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaNpNotice': {
        'name': 'QaNpNotice',
        'table': 'qa_np_notice',
        'primaryKey': 'noticeid',

        'aliases': {
            'noticeid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaPosttag': {
        'name': 'QaPosttag',
        'table': 'qa_posttags',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'QaSharedevent': {
        'name': 'QaSharedevent',
        'table': 'qa_sharedevents',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'QaTagmeta': {
        'name': 'QaTagmeta',
        'table': 'qa_tagmetas',
        'primaryKey': 'title',

        'aliases': {
            'tag': 'id',
            'title': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaTagword': {
        'name': 'QaTagword',
        'table': 'qa_tagwords',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'QaTitleword': {
        'name': 'QaTitleword',
        'table': 'qa_titlewords',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserevent': {
        'name': 'QaUserevent',
        'table': 'qa_userevents',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserfield': {
        'name': 'QaUserfield',
        'table': 'qa_userfields',
        'primaryKey': 'fieldid',

        'aliases': {
            'fieldid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserlevel': {
        'name': 'QaUserlevel',
        'table': 'qa_userlevels',
        'primaryKey': 'entityid',

        'aliases': {
            'userid': 'id',
            'entitytype': 'id',
            'entityid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserlimit': {
        'name': 'QaUserlimit',
        'table': 'qa_userlimits',
        'primaryKey': 'action',

        'aliases': {
            'userid': 'id',
            'action': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserlogin': {
        'name': 'QaUserlogin',
        'table': 'qa_userlogins',
        'primaryKey': null,
        'aliases': {},
        'referenceMap': {},
        'listReferences': {}
    },

    'QaUsermeta': {
        'name': 'QaUsermeta',
        'table': 'qa_usermetas',
        'primaryKey': 'title',

        'aliases': {
            'userid': 'id',
            'title': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUsernotice': {
        'name': 'QaUsernotice',
        'table': 'qa_usernotices',
        'primaryKey': 'noticeid',

        'aliases': {
            'noticeid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserpoint': {
        'name': 'QaUserpoint',
        'table': 'qa_userpoints',
        'primaryKey': 'userid',

        'aliases': {
            'userid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserprofile': {
        'name': 'QaUserprofile',
        'table': 'qa_userprofile',
        'primaryKey': 'title',

        'aliases': {
            'userid': 'id',
            'title': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUser': {
        'name': 'QaUser',
        'table': 'qa_users',
        'primaryKey': 'userid',

        'aliases': {
            'userid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUservote': {
        'name': 'QaUservote',
        'table': 'qa_uservotes',
        'primaryKey': 'userid',

        'aliases': {
            'postid': 'id',
            'userid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaWidget': {
        'name': 'QaWidget',
        'table': 'qa_widgets',
        'primaryKey': 'widgetid',

        'aliases': {
            'widgetid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaWord': {
        'name': 'QaWord',
        'table': 'qa_words',
        'primaryKey': 'wordid',

        'aliases': {
            'wordid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'User': {
        'name': 'User',
        'table': 'users',
        'primaryKey': 'uid',

        'aliases': {
            'uid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    },

    'QaUserfavorite': {
        'name': 'QaUserfavorite',
        'table': 'qa_userfavorites',
        'primaryKey': 'entityid',

        'aliases': {
            'userid': 'id',
            'entitytype': 'id',
            'entityid': 'id'
        },

        'referenceMap': {},
        'listReferences': {}
    }
};

const connections = {};

export function registerType(type) {
    if (!resolveMap[type.name]) {
        throw new Error(
            'Cannot register type "' + type.name + '" - resolve map does not exist for that type'
        );
    }

    resolveMap[type.name].type = type;
};

export function getType(type) {
    if (!resolveMap[type] || !resolveMap[type].type) {
        throw new Error('No type registered for type \'' + type + '\'');
    }

    return resolveMap[type].type;
};

export function getConnection(type) {
    if (!connections[type]) {
        connections[type] = connectionDefinitions({
            name: type,
            nodeType: getType(type)
        }).connectionType;
    }

    return connections[type];
};