"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

export default function Playground() {
  const [code, setCode] = useState(
    `// Write your code here\nconsole.log("Hello World!");`
  );
  const [output, setOutput] = useState("");

  const handleEditorChange = (value: string) => {
    setCode(value || "");
  };

  const handleRun = () => {
    try {
      const result = new Function(code)();
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error?.toString() as string}`);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto">
      <div className="flex-grow border border-zinc-700 rounded-t-lg overflow-hidden">
        <Editor
          className="w-[600px] h-[600px]"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
          }}
          onChange={handleEditorChange}
        />
      </div>
      <div className="flex justify-between items-center p-4 bg-zinc-800 rounded-b-lg">
        <Button onClick={handleRun} size="sm" variant="secondary">
          Run
        </Button>
        <div className="flex-grow ml-4 font-mono text-sm text-zinc-100 bg-zinc-900 p-2 rounded-md max-h-[100px] overflow-auto">
          {output || "Output will appear here..."}
        </div>
      </div>
    </div>
  );
}
