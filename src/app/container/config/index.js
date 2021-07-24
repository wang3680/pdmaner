import React from 'react';
import { SimpleTab, FormatMessage } from 'components';

import './style/index.less';
import EntityInitFields from './EntityInitFields';
import SystemParameter from './SystemParameter';
import EntityBasePropertiesList from './EntityInitProperties';
//import DbConnect from './DbConnect';
import {getPrefix} from '../../../lib/prefixUtil';

const Components = {
  EntityInitFields,
  SystemParameter,
  EntityBasePropertiesList,
  //DbConnect,
};
export default React.memo(({prefix, dataSource, dataChange, updateDataSource, config}) => {
  const configTab = ['EntityInitFields', 'EntityBasePropertiesList', 'SystemParameter']
  const currentPrefix = getPrefix(prefix);
  return <SimpleTab
    options={configTab
      .map((d) => {
        const Com = Components[d] || '';
        return {
          key: d,
          title: FormatMessage.string({id: `config.${d}`}) || d,
          content: <Com config={config} updateDataSource={updateDataSource} dataSource={dataSource} prefix={currentPrefix} dataChange={dataChange}/>,
        };
      })}
  />;
});
