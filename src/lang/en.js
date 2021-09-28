export default {
    system: {
        title: 'chiner',
        template: 'The current project is a template project',
        err: 'Error',
        errorMessage: 'The program is abnormal. Please go to the log file to check the error log',
    },
    toolbar: {
        save: 'save',
        saveAs: 'saveAs',
        undo: 'undo',
        redo: 'redo',
        opt: 'operate',
        relation: 'relation',
        emptyEntity: 'empty',
        alignment: 'alignment',
        rect: 'rect',
        round: 'round',
        circle: 'circle',
        polygon: 'polygon',
        fontColor: 'fontColor',
        fillColor: 'fitColor',
        scale: 'scale',
        import: 'import',
        importPDMan: 'import PDMan file',
        importCHNR: 'import CHNR file',
        importPowerDesigner: 'import PowerDesigner file',
        importDb: 'import DB',
        importDomains: 'import Domains',
        exportDomains: 'export Domains',
        export: 'export',
        exportConfig: 'export config data',
        importConfig: 'import config data',
        importDDL: 'import DDL',
        exportImg: 'export the current canvas as a picture',
        exportSql: 'export DDL',
        exportDict: 'exportDictSQL',
        exportWord: 'export WORD',
        exportWordTplProject: 'The template demo project cannot be exported directly to word. Please save the template project locally first',
        exportWordStep1: '[1/2] 1. Generating diagram...',
        exportWordStep2: '[2/2] 2. Generating word...',
        exportSuccess: 'Export Success',
        exportPath: 'The export file is located at:"{path}"',
        setting: 'setting',
        dbConnect: 'db',
        search: 'entity/view/dict',
        create: 'create',
        open: 'open',
        relationEnableTitle: 'This function is only available under the currently active tab page is diagram',
        group: 'group',
    },
    createProject: 'createNewProject...',
    renameProject: 'updateProject...',
    deleteProject: 'deleteProject...',
    invalidProjectFile: 'Invalid project file',
    invalidProjectData: 'Invalid chnr file, please create a new project before importing!Do not modify the project suffix directly',
    invalidPdmFile: 'Invalid pdm file',
    invalidDDLFile: 'Invalid sql file',
    invalidDomainsFile: 'Invalid domains file',
    invalidConfigFile: 'Invalid config file',
    invalidPDManFile: 'Invalid PDMan file',
    invalidCHNRFile: 'Invalid CHNR file',
    createProjectExists: 'Project already exists',
    saveProject: 'saveProject...',
    readProject: 'readProject...',
    importPDMan: 'import PDMan...',
    updateConfig: 'updateConfig...',
    wait: 'Under development, please look forward to...',
    openDir: 'open dir',
    openFile: 'open file',
    openDirError: 'open dir error',
    openFileError: 'open file error',
    saveSuccess: 'save success',
    saveFail: 'save fail',
    project: {
        entities: 'ENTITIES',
        views: 'VIEWS',
        diagram: 'DIAGRAM',
        dicts: 'DICTS',
        domains: 'DOMAINS',
        dataTypeMapping: 'DATATYPE',
        dataTypeSupport: 'DATABASE_AND_LANGUAGE',
        default: 'default',
        name: 'name',
        describe: 'describe',
        path: 'save path',
        createDate: 'createDate',
        updateDate: 'updateDate',
        avatar: 'avatar',
        noAvatar: 'unset avatar',
        pickAvatar: 'Select from the built-in Icon Library',
        getProjectData: 'getProjectData...',
        getProjectDataError: 'Failed to get project information! The project file does not exist or is damaged!',
        avatarValidate: {
            placeholder: 'The pixel is 56 * 56, and the size is within 10KB. Base64 can be used directly',
            validate: 'Invalid picture! Size cannot exceed 10KB, image pixel is 56 * 56',
        },
    },
    quick: {
        save: 'save project',
        toggleCase: 'toggle case',
        drag: 'In the diagram interface, hold down Ctrl + and drag the mouse to drag the canvas',
        minimap: 'In the diagram interface, press and hold Ctrl / Command + m to switch the diagram',
        find: 'In the diagram interface, press and hold Ctrl / Command + F to switch the search',
    },
    welcome: 'welcome to use',
    welcomeVersionTitle: 'checkVersionData...',
    newVersion: 'New version found',
    version: {
        number: 'NewVersionNumber',
        date: 'UpdateDate',
        log: 'UpdateLog',
        download: 'DownloadUrl',
    },
    home: {
        project: 'project',
        allProject: 'all project',
        jumpOptBook: 'Click to jump to the online document',
        optBook: 'operation manual',
        optBookTitle: 'Scan the QR code below to read the document',
        optBookTitle1: 'Ding Ding, Wechat code scanning',
        optBookTitle2: 'Wechat applet',
        recently: 'recently open',
        exampleProject: 'example project',
        search: 'project name/desc',
        createProject: 'New Project',
        editProject: 'Edit Project',
        proInfo: 'project info',
        proConfig: 'project config',
        openProject: 'Double click to open project',
        removeHistory: 'Remove from recent',
        removeProject: 'Remove Project',
    },
    openProject: 'openProject',
    optFail: 'operation fail',
    optSuccess: 'operation success',
    optEnd: 'operation end',
    uniqueKeyError: 'This field is not repeatable, please modify',
    emptyField: '<empty filed>',
    entityUniqueKeyError: 'The data table contains duplicate fields, please modify,The overrun data entity has[{entities}]',
    entityUniqueDefKeyError: 'The data table/view already exists, please modify it. The duplicate data table/view has [{entities}]',
    entityHideInGraphSizeError: 'Please select the typical attribute fields that can represent the business meaning of this table, and limit them to [{size}], The overrun data entity has[{entities}],If you need to modify it, please modify it through "Settings > SystemParameter > relation show field size"',
    formValidateMessage: 'Asterisk is required, cannot be empty!',
    entityAndViewUniquenessCheck: 'required cannot be duplicate!',
    showGroup: 'GROUP',
    emptyGroup: 'There is no grouping data for now. Click to create a new grouping',
    hiddenGroup: 'SIMPLE',
    hiddenGroupInfo: 'It can be modified by setting / SystemParameter / default display label',
    moduleList: 'Data Model',
    closeCurrent: 'close current',
    closeOthers: 'close others',
    closeAll: 'close all',
    menus: {
        opt: {
            add: 'add ',
            delete: 'delete ',
            move: 'change group',
            copy: 'copy ',
            cut: 'cut ',
            paste: 'paste ',
            clear: 'clear ',
            edit: 'edit ',
            editRelation: 'edit data',
            copyAll: 'copy all',
        },
        groups: 'group',
        entities: 'entities',
        entity: 'entity',
        views: 'views',
        view: 'view',
        diagrams: 'diagrams',
        diagram: 'diagram',
        dicts: 'dicts',
        dict: 'dict',
        domains: 'domains',
        domain: 'domain',
        dataTypeMapping: 'dataType',
        mapping: 'mapping',
        dataTypeSupport: 'DatabaseAndLanguage',
        dataType: 'DatabaseOrLanguage',
        add: {
            newEntity: 'New entity',
            newView: 'New view',
            newViewMultipleSelect: 'Please select',
            newViewStep1: 'Select Entity',
            newViewStep2: 'Select Entity',
            newViewStep3: 'View base',
            newViewStepPre: 'Pre',
            newViewStepNext: 'Next',
            newRelation: 'New relation',
            newDict: 'New dict',
            newGroup: 'New group',
            newDomain: 'New domain',
            newDataType: 'New dataType',
            newDataTypeSupport: 'New Database Or Language',
        },
        edit: {
            editRelation: 'Edit relation',
            editGroup: 'Edit group',
            editDomain: 'Edit domain',
            editMapping: 'Edit mapping',
            editDataTypeSupport: 'editDatabaseAndLanguage',
        },
    },
    fieldRemarkDetail: 'data detail',
    copySuccess: 'copy success',
    copyFail: 'copy fail',
    copyWarring: 'copy fail : invalid data',
    cutSuccess: 'cut success',
    cutWarring: 'cut fail : invalid data',
    pasteWarring: 'paste fail : invalid data',
    pasteSuccess: 'paste success',
    pasteResult: 'paste succeeded {success} and failed {fail} repeatedly',
    deleteSuccess: 'delete success',
    closeConfirmTitle: 'exit project confirmation',
    closeConfirm: 'quitting the current project will lose all unsaved data, please make sure that the save operation has been executed!',
    exitConfirmTitle: 'Closing confirmation',
    exitConfirm: 'Do you want to close the software?',
    deleteConfirmTitle: 'Delete confirm',
    importConfirm: 'Import operation will overwrite current project whether to continue?',
    deleteConfirm: 'Delete cannot be undone, is continue ?',
    deleteFromDiskConfirm: 'You will delete this file from your hard disk. Are you sure you want to delete it?',
    deleteWarring: 'delete fail : invalid data',
    clearConfirmTitle: 'Clear confirm',
    clearConfirm: 'Clear cannot be undone, is continue ?',
    clearSuccess: 'clear success',
    moveSuccess: 'move success',
    canvas: {
        opt: {
            undo: 'undo',
            redo: 'redo',
            enlarge: 'enlarge',
            narrow: 'narrow',
            save: 'save',
            addNode: 'addNode',
            search: 'searchNOde',
        },
        edge: {
            form: 'form',
            to: 'to',
            none: 'none',
            arrow: 'arrow',
            addEdgeMark: 'addEdgeMark',
            removeEdgeMark: 'removeEdgeMark',
            removeEdge: 'removeEdge',
            setRelation: 'setRelation',
            editRelation: 'editRelation',
            relationLabel: 'relationLabel',
            brokenLine: 'brokenLine',
            straightLine: 'straightLine',
        },
        node: {
            delete: 'delete node',
            entityHasOpen: 'This data table has been occupied by other tabs! Please close the tab or drag it to the open data table!',
            entityJump: 'Please close the occupied tab or directly',
            entityOpen: 'open',
            entityTab: 'tab',
            defaultRemark: 'Double click the input',
            remarkPlaceholder: 'Please enter your data(support Markdown)',
            extendError: 'Inheritance failed, the data table has no visible primary key',
            find: 'Find table on the diagram',
        },
        title: 'Drag entity from left entities to diagram',
        isMin: 'It\'s the minimum multiple. It can\'t be reduced',
        isMax: 'It\'s the maximum multiple. It can\'t be enlarged',
        entity: 'entity',
    },
    standardFields: {
        isStandard: 'isStandard',
        standardFields: 'standard field library maintenance',
        groupNotAllowEmpty: 'GroupCode Not Allow Empty',
        groupAndFieldNotAllowRepeatAndEmpty: 'Group or field cannot be duplicate or empty',
        selectGroup: 'selectGroup',
        group: 'group',
        groupName: 'groupName',
        groupCode: 'groupCode',
        dropFieldsSuccessResult: 'success {success}:',
        dropFieldsShowResult: 'show {show}',
        dropFieldsHiddenResult: ', hidden {hidden}',
        dropFieldsFailResult: 'Repeated failure {fail}',
        fieldsLib: 'FieldsLib',
        standardFieldsLib: 'Standard Fields Lib',
        standardFieldsLibSearch: 'key/name',
        standardFieldsLibEmpty: 'No data available',
        exportStandardFieldsLib: 'export',
        importStandardFieldsLib: 'import',
        editStandardFields: 'Edit Standard Fields',
        help: 'Field library fields can be directly dragged to the data table list or the data table on the diagram',
        errData: 'Invalid standard field library data',
        setting: 'maintain',
    },
    modelTab: 'model',
    domainTab: 'domain',
    getUserConfigData: 'getting user config data...',
    button: {
        ok: 'ok',
        cancel: 'cancel',
        test: 'test',
        close: 'close',
        save: 'save',
        edit: 'edit',
    },
    tableEdit: {
        data: 'table',
        codes: 'codes',
        indexes: 'indexes',
        importFields: 'import',
        moveStart: 'top',
        moveUp: 'up',
        moveDown: 'down',
        moveEnd: 'bottom',
        addField: 'add',
        deleteField: 'delete',
        moveFieldLeft: 'left',
        moveFieldRight: 'right',
        exchangeCode: 'exchange',
        showSelectedFields: 'show',
        hiddenSelectedFields: 'hidden',
        addStandardFields: 'lib',
        addStandardFieldsMessage: 'Operation {count} data, {fail} due to repeated failures',
        resetHeaders: 'reset',
        expand: 'expand',
        unExpand: 'unExpand',
        opt: [
            'Operation tips: ',
            '1. Click the line number to select the current line',
            '2. Hold down Ctrl + click the line number and select the skip line',
            '3. Hold down Shift + click the line number to select consecutive lines',
            '4. After the row is selected, Ctrl + C copies and Ctrl + V pastes',
            '5. Use Ctrl + Shift + U to convert case inside cells',
            '6. Select multiple rows to batch adjust the data domain',
        ],
    },
    tableValidate: {
        invalidJsonData: 'invalid json data!',
        invalidIndexes: 'invalid indexes data!',
        invalidFields: 'invalid fields data!',
        selectedFieldsEmpty: 'Please select the field you want',
    },
    tableBase: {
        type: 'Create Type',
        empty: 'empty',
        extend: 'extend',
        parent: 'parent',
        parentFields: 'Parent Fields',
        parentFieldsCount: '{count} fields are currently selected',
        other: 'More Settings',
        fields: 'Field Details',
        selectFields: 'Select Fields',
        defName: 'Name',
        defKey: 'Code',
        tableName: 'TABLE_NAME',
        tableTitle: 'TABLE_TITLE',
        group: 'Group',
        properties: 'Customer Property',
        propertyName: 'propertyName',
        propertyValue: 'propertyValue',
        addPropertyCount: 'add {count} property',
        addFieldCount: 'add {count} field',
        nameTemplate: 'DisplayMode',
        comment: 'Explain',
    },
    tableHeaders: {
        defName: 'fieldName',
        defKey: 'fieldKey',
        remark: 'remark',
        domain: 'domain',
        dbType: 'dataType',
        len: 'length',
        scale: 'decimalDigit',
        primaryKey: 'primaryKey',
        notNull: 'notNull',
        autoIncrement: 'autoIncrement',
        defaultValue: 'defaultValue',
        hideInGraph: 'graph',
        uiHint: 'uiHint',
        indexesName: 'name',
        indexIsUnique: 'isUnique',
        indexComment: 'comment',
        indexesFieldsName: 'fieldName',
        ascOrDesc: 'sort',
        indexesFieldKey: 'fieldKey',
        refEntity: 'refEntity',
        refDict: 'refDict',
    },
    tableTemplate: {
        content: 'content',
        createTable: 'createTable',
        createView: 'createView',
        createIndex: 'createIndex',
    },
    domain: {
        defKey: 'DomainCode',
        defName: 'DomainName',
        applyFor: 'ApplyForDataType',
        len: 'Length',
        scale: 'Scale',
    },
    dataType: {
        defKey: 'dataTypeCode',
        defName: 'dataTypeName',
        defaultDb: '(default)',
        defaultDbInfo: 'It is detected that you do not have a default database configured. The system will automatically specify a default database for you',
    },
    dict: {
        view: 'view',
        create: 'Create Dict',
        dictValidate: {
            invalidDictItems: 'invalid dict items!',
        },
        dictAndItemNotAllowRepeatAndEmpty: 'Code or ItemKey Cannot be repeated or empty',
        defKey: 'Code',
        defName: 'Name',
        intro: 'intro',
        items: 'dictItems',
        base: 'Basic Information',
        enabled: 'YES',
        disabled: 'NO',
        item: {
            defKey: 'itemKey',
            defName: 'itemName',
            parentKey: 'parentKey',
            sort: 'sortCode',
            intro: 'intro',
            enabled: 'enabled',
            attr1: 'attr1',
            attr2: 'attr2',
            attr3: 'attr3',
        },
    },
    view: {
        entityList: 'Entity List',
        selectEntity: 'Select entity',
        selectEntityMessage: 'Currently [{count}] entities have been selected',
        selectEntityIcon: 'Click to select entity',
        emptyEntityRefs: 'No imported entity found, please import entity first and then import field',
        importFields: 'Import fields',
        fieldSearchPlaceholder: 'code/name',
    },
    viewBase: {
        defKey: 'Code',
        defName: 'Name',
        viewName: 'VIEW_NAME',
        viewTitle: 'VIEW_TITLE',
    },
    relation: {
        defKey: 'Relation Code',
        relationType: 'Relation Type',
        relationEntity: 'entity',
        relationField: 'field',
        defName: 'Relation Name',
        graphCanvas: 'graphCanvas',
    },
    database: {
        templateError: 'Database template error, please refer to dot.js configuration template information',
        templateEdit: 'template edit',
        defKey: 'defKey',
        type: 'type',
        defaultDbError: 'Default database can only have one',
        nameError: 'Data name or Code cannot be empty',
        defaultDb: 'defaultDb',
        defaultTemplate: 'defaultTemplate',
        defaultDbMessage: '(check this box to display the data type of the default database in the data table and diagram)',
        codeType: {
            dbDDL: 'dbDDL',
            appCode: 'appCode',
        },
        templateEditOpt: {
            previewEdit: 'previewEdit',
            getTemplateByDefaultOrRemote: 'See more code templates',
            useTemplate: 'useTemplate',
        },
        preview: {
            demoData: 'demoData',
            templateEdit: 'templateEdit',
            dot: 'learn dot.js',
            result: 'result',
        },
        dot: {
            address: 'official website: https://github.com/olado/doT',
            learnAddress: 'reference address: https://tech.meituan.com/dot.html',
            project: 'project',
            javascript: 'JavaScript syntax',
            grammar: 'corresponding grammar',
            example: 'case',
            outputVariables: 'output variables',
            variable: 'variable name',
            conditional: 'conditional judgment',
            expression: 'conditional expression',
            transition: 'conditional transition',
            loop: 'loop',
            loopVariable: 'loop variable',
            method: 'execution method',
            globalMethod: 'global method: can be used by it. Func. Method name',
            methodName: 'method name',
            methodFunction: 'method function',
            parameter: 'parameter Introduction',
            camel: {
                name: 'underline to hump',
                param: 'parameter 1: the string to be converted, parameter 2: whether the initial should be capitalized',
            },
            underline: {
                name: 'hump to underline',
                param: 'parameter 1: the string to be converted, parameter 2: all uppercase',
            },
            upperCase: {
                name: 'all capitals',
                param: 'parameter 1: string to be converted',
            },
            lowerCase: {
                name: 'all lowercase',
                param: 'parameter 1: string to be converted',
            },
            join: {
                name: 'multiple string splicing',
                param: 'unlimited parameters, the last parameter is the splice',
            },
            intersect: {
                name: 'intersection of two arrays',
                param: 'parameter 1: array 1, parameter 2: array 2',
            },
            union: {
                name: 'Union of two arrays',
                param: 'parameter 1: array 1, parameter 2: array 2',
            },
            minus: {
                name: 'difference set of two arrays',
                param: 'parameter 1: array 1, parameter 2: array 2（ Array 1 has more data than array 2)',
            },
        },
    },
    config: {
        UiHint: 'UI suggestions',
        uiHint: {
            addCount: 'Add {count} UI suggestions',
            add: 'add',
            delete: 'delete',
            moveUp: 'up',
            moveDown: 'down',
            defKey: 'UI code',
            defName: 'UI name',
        },
        title: 'setting',
        EntityInitFields: 'New Entity Init Fields',
        EntityBasePropertiesList: 'New Entity Base Properties',
        JavaHomeConfigResult: {
            success: 'config success',
            error: 'config error',
            placeholder: 'If it is not filled in, it will be automatically read from the environment variable of the system',
            notFoundJDK: 'no JDK is detected, please install the JDK first (if it has been installed, please check whether the environment variables are configured correctly, or go to system [setting] -> [SystemParameter] -> [JAVA_HOME] to specify the JDK path)',
        },
        DictSQLTemplate: 'dict SQL template',
        JVMLabel: 'JVM Parameters',
        JVMPlaceholder: 'multiple parameters, please use Space to split',
        SystemParameter: 'SystemParameter',
        DbConnect: 'DbConnect',
        SqlDelimiterLabel: 'sqlDelimiter',
        DocTemplateLabel: 'docTemplate',
        DocTemplateHelp: 'config help',
        DocTemplatePlaceholder: 'The default is the template provided by the system. If you need to modify it, please save it as and then specify a template file',
        DocTemplateSaveAs: 'Save As',
        PreviewModal: 'Preview Modal',
        language: {
            label: 'language',
            zh: 'CHINESE',
            en: 'ENGLISH',
        },
        autoSave: {
            label: 'autoSave',
            0: 'close',
            2: '2 minutes',
            5: '5 minutes',
            10: '10 minutes',
            20: '20 minutes',
            30: '30 minutes',
            60: '60 minutes',
        },
        ModelLabel: 'default display label',
        ModelLabelMessage: '(Take effect after restarting or reopening the project)',
        relationFieldSize: 'relation show field size',
        relationType: 'relation type',
    },
    dbConnect: {
        log: 'Check the log file at:',
        title: 'db connect setting',
        defaultDbConnectDesc: 'The default database is:',
        defaultDbConnectEmpty: 'Currently, there is no default selected connection',
        titlePlaceholder: 'db connect desc',
        namePlaceholder: 'db connect name',
        customDriver: 'custom-driver',
        customDriverPlaceholder: 'At present, mysql, sqlserver, Oracle, PostgreSQL, Db2, DM do not need to be configured',
        driver: 'driver-class',
        url: 'url',
        username: 'username',
        password: 'password',
        test: 'test',
        add: 'add',
        delete: 'delete',
        demoDbConnect: {
            mysql: 'jdbc:mysql://ip:port/name?characterEncoding=UTF-8&useSSL=false&useUnicode=true&serverTimezone=UTC',
            oracle: 'jdbc:oracle:thin:@ip:port/name',
            sqlserver: 'jdbc:sqlserver://ip:port;DatabaseName=name',
            postgresql: 'jdbc:postgresql://ip:port/name',
            db2: 'jdbc:db2://ip:port/name:progressiveStreaming=2',
            dm: 'jdbc:dm://ip:port/name',
            guassdb: 'jdbc:postgresql://ip:port/name',
            kingbase: 'jdbc:kingbase8://ip:port/name',
            maxcompute: 'jdbc:odps:http://ip:port/api?project=name&accessId=ACCESS_ID&accessKey=ACCESS_KEY',
        },
        configExample: 'config example:',
        connectSuccess: 'connectSuccess',
        connectSuccessMessage: 'Database connection settings are configured correctly',
        connectError: 'connectError',
        emptyConnect: 'No database connection, please click Add to create',
        validateDb: 'The connection name cannot be duplicate or empty',
    },
    dbReverseParse: {
        emptyDbConn: 'Database connection not detected! Please go to "toolbar / db" to configure the database connection',
        next: 'next step',
        pre: 'pre step',
        validate: 'Database or logical name format cannot be empty',
        dbSelectTitle: 'select db',
        dbSelect: 'Please select the database to be resolved',
        nameFormat: 'Logical name format',
        nameFormatType: {
            UPPERCASE: 'uppercase',
            LOWCASE: 'lowcase',
            DEFAULT: 'default',
        },
        parseDbTitle: 'parse db',
        parseDb: 'Parsing database, please wait... (do not close the current pop-up window!)',
        parseDbError: 'Database parsing failed',
        selectEntity: 'select data table',
        dealResult: 'Analysis result: a total of [{data}] data tables are resolved. There are [{exists}] tables in the current model. Please check thedata tables that need to be added to the model!',
},
    importDb: {
        dealResult: 'Analysis result: a total of [{data}] data tables are resolved. There are [{exists}] tables in the current model. Please check thedata tables that need to be added to the model!',
    },
group: {
    base: 'base',
        defKey: 'Group',
        defName: 'Name',
        selectGroup: 'Select group',
        refEntities: 'Entity',
        refViews: 'View',
        refDiagrams: 'Diagram',
        refDicts: 'Dict',
},
exportFile: {
    warring: 'Under development, please look forward to...',
    html: 'export html',
    markdown: 'export markdown',
},
components: {
    select: {
        empty: '---please select---',
    },
    multipleselect: {
        empty: 'empty data',
    },
    codehighlight: {
        loading: 'loading code ...',
    },
    modalInput: {
        select: 'please select',
            placeholder: 'Click the input box or icon to select',
    },
    searchSuggest: {
        length: 'find {count} data',
        entities: 'data table (view) definition',
        fields: 'data table (view) fields',
        dicts: 'data dictionary definitions',
        dictItems: 'data dictionary entries',
        standardFields: 'field library',
        empty: 'empty data',
        detail: 'detail',
        position: 'position',
        more: 'all...',
        moreList: 'all',
    },
    listSelect: {
        result: 'a total of {size} standard fields have been parsed, of which {repeat} already exists',
        remove: 'remove',
        repeatMessage: 'Selecting this data table will override the existing data table in the system',
        search: 'code/name',
        empty: 'No data, please click on the left to select',
        disable: 'The data table used in the diagram is required',
        group: 'group',
        groupNotAllowEmpty: 'group not allow empty',
    },
},
projectTemplate: {
    entityInitFields: {
        REVISION: 'REVISION',
            CREATED_BY: 'CREATED_BY',
            CREATED_TIME: 'CREATED_TIME',
            UPDATED_BY: 'UPDATED_BY',
            UPDATED_TIME: 'UPDATED_TIME',
    },
},
    exportSql: {
        entity: 'export data table/view',
        exportEntityAll: 'export all data tables/views by default',
        exportDictAll: 'export all data dicts by default',
        exportType: ['custom','all','create table/view statement','create index statement', 'basic code'],
        currentSelectEntity: 'number of currently selected data tables/views: {count}',
        currentSelectDict: 'number of currently selected data dicts: {count}',
        preview: 'preview',
        export: 'export',
        pickEntity: 'pick entity/view',
        pickDict: 'pick dict',
        exportData: 'export data',
        exportCustomerData: 'export customer data',
        defaultGroup: 'default group',
        entityList: 'entities',
        viewList: 'views',
    },
};

