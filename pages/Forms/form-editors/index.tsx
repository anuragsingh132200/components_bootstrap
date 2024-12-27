import React, { useState, useRef, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

const FormEditors = () => {
    // CK Editor
    const editorRef = useRef<any>();
    const [editor, setEditor] = useState(false);
    const { CKEditor, ClassicEditor }: any = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        };
        setEditor(true);
    }, []);

    const [data, setData] = useState('');

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Head>
                        <title>Form Editors | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Editors" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Ckeditor Classic Editor</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>ckeditor-classic</code> class to set ckeditor classic editor.</p>
                                    {editor ? <CKEditor
                                        editor={ClassicEditor}
                                        data={data}
                                        onReady={(editor: any) => {
                                            // You can store the "editor" and use when it is needed.
                                        }}
                                        onChange={(event: any, editor: any) => {
                                            const data = editor.getData();
                                            setData(data);
                                        }}
                                    /> : <p>ckeditor5</p>}

                                    {/* <div className="snow-editor" style={{ height: 300 }}>
                                        <div ref={quillRef} />
                                    </div> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default FormEditors;