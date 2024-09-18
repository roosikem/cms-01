import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";
import Editor from '@monaco-editor/react';
import { useRef } from "react";

export const BlogPostCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
  });

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  
  const editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  const onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  }
  const options = {
    selectOnLineNumbers: true
  };

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Content"}
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"Category"}
          name={["category", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label={"Status"}
          name={["status"]}
          initialValue={"draft"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue={"draft"}
            options={[
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
              { value: "rejected", label: "Rejected" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>

        <Editor
        height="90vh"
        language="javascript"
        theme="vs-dark"
        value={"{}"}
        options={options}
        onChange={onChange}
        onMount={editorDidMount}
      />
      </Form>
    </Create>
  );
};
function editorDidMount(editor: any, monaco: any) {
  throw new Error("Function not implemented.");
}

