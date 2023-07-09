import { Redirect } from 'umi';
import { useEffect, useState } from 'react';
import { user_api } from '@/api/user';

const Auth = (props: any) => {
    const isLogin = useAuth();

    return <>{isLogin ? <div>{props.children}</div> : <Redirect to="/login" />}</>;
};

export default Auth;

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    useEffect(() => {
        check();
    }, []);

    const check = () => {
        user_api.checkSession().then((res) => {
            // 1: session 存在
            // 0: session 不存在
            if (res.success && res.data == 1) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        });
    };

    return isLogin;
};
