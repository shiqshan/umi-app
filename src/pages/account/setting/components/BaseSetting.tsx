import React, { useEffect, useState } from 'react';
import { Button, message, Space, Upload, Form, InputNumber, Input, Spin } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import styles from '../index.less';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import { connect } from 'umi';
import { user_api, UserInfo } from '@/api/user';
import { downlodad } from '@/api/util';
import { Dispatch } from '@@/plugin-dva/connect';

/**
 * 基本设置
 * @constructor
 */
const BaseSetting = ({ user, dispatch }: { user: UserInfo; dispatch: Dispatch }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        form.setFieldsValue({
            nickname: user.nickname,
            avatar: user.avatar
                ? [
                      {
                          uid: user.id,
                          name: user.avatar,
                          status: 'done',
                          url: downlodad(user.avatar),
                      },
                  ]
                : [],
            tel_number: user.tel_number,
        });
    }, [user]);

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label}格式不正确',
        },
    };

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    const uploadButton = (
        <div>
            {<PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const props: UploadProps = {
        beforeUpload: (file) => {
            // const isPNG = file.type === 'image/png';
            // if (!isPNG) {
            //     message.error(`${file.name} is not a png file`);
            // }
            // return isPNG || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
            console.log(info.fileList);
        },
    };

    const onFinish = (values: any) => {
        console.log(values);
        // return;
        setLoading(true);
        user_api
            .update_baseInfo({
                avatar: values.avatar?.[0].response?.data || values.avatar?.[0].name,
                nickname: values.nickname,
                tel_number: values.tel_number,
            })
            .then((res) => {
                if (res?.success) {
                    message.success('修改成功');
                    user_api.getInfo().then((res) => {
                        if (res?.success) {
                            dispatch({ type: 'user/save', payload: res.data || {} });
                        }
                    });
                } else {
                    message.success('修改失败');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <h2>{'基本设置'}</h2>
            <div className={styles.base_set_form}>
                <Spin spinning={loading}>
                    <Form {...layout} form={form} onFinish={onFinish} validateMessages={validateMessages} style={{ width: '500px' }}>
                        <Form.Item
                            label="头像"
                            name={'avatar'}
                            valuePropName="fileList"
                            getValueFromEvent={(e) => {
                                if (Array.isArray(e)) {
                                    return e;
                                }
                                return e && e.fileList;
                            }}
                        >
                            <Upload
                                name="file"
                                listType="picture-card"
                                className="avatar-uploader"
                                onPreview={onPreview}
                                maxCount={1}
                                accept={'image/png, image/jpeg, image/webp, image/jpg'}
                                action="/api/common/upload"
                                {...props}
                            >
                                {uploadButton}
                            </Upload>
                        </Form.Item>
                        <Form.Item name={'nickname'} label="昵称" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        {/*<Form.Item name={'email'} label='邮箱' rules={[{ type: 'email' }]}>*/}
                        {/*    <Input />*/}
                        {/*</Form.Item>*/}
                        <Form.Item name={'tel_number'} label="手机号">
                            <Input maxLength={11} showCount />
                        </Form.Item>
                        <Form.Item name={'introduction'} label="个人说明">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                提交修改
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>

                {/*<Image width={300} src={require('@/public/icon/ikun.webp')} />*/}
            </div>
        </>
    );
};

export default connect(
    ({ user }: { user: UserInfo }) => ({ user: user }),
    (dispatch: Dispatch) => ({ dispatch: dispatch }),
)(BaseSetting);
