import React, { useEffect,  useState } from 'react';
import localStorage from 'localStorage';

export default React.memo(({prefix, dataChange, dataSource, twinkle, updateDataSource}) => {
    const [loginUrl, setLoginUrl] = useState('http://198.60.1.1:18089/g/hsxone.omc/v/submitLogin');
    const [fieldUrl, setFieldUrl] = useState('http://198.60.1.1:18089/bigdata/DBReport-server/V1.1/MetaFieldController/getMetaFieldToJson');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    let fieldInfo = JSON.parse(localStorage.getItem('fieldInfo'));
    useEffect(() => {
        if(fieldInfo){
            setLoginUrl(fieldInfo.loginUrl);
            setFieldUrl(fieldInfo.fieldUrl);
            setUserName(fieldInfo.userName);
            setPassword(fieldInfo.password);
        }
    }, []);
    const saveLoginInfo = (evt) => {
        evt.preventDefault();
        // console.info(loginUrl);
        let obj = {loginUrl:loginUrl,fieldUrl:fieldUrl,userName:userName,password:password};
        localStorage.setItem('fieldInfo',JSON.stringify(obj));
    };
    return <div>
        <form onSubmit={saveLoginInfo}>
            <table align="left">
                <tbody>
                <tr>
                    <td>认证地址：</td>
                    <td><input
                        type="text"
                        placeholder="请输入认证地址URL"
                        style={{width:800}}
                        value={loginUrl}
                        onChange={event => setLoginUrl(event.target.value)}
                    /></td>
                </tr>
                <tr>
                    <td>字段接口：</td>
                    <td><input
                        type="text"
                        placeholder="请输入字段接口URL"
                        style={{width:800}}
                        value={fieldUrl}
                        onChange={event => setFieldUrl(event.target.value)}
                    /></td>
                </tr>
                <tr>
                    <td>用户名:</td>
                    <td><input
                        type="text"
                        placeholder="请输入用户名"
                        value={userName}
                        onChange={event => setUserName(event.target.value)}
                    /></td>
                </tr>
                <tr>
                    <td>密码:</td>
                    <td><input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    /></td>
                </tr>
                <tr>
                    <td><input type="submit"/></td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>;
});
