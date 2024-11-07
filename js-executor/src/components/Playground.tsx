import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { useCodeStore } from "@/hooks/useCode";

export default function Playground() {
  const { language } = useCodeStore();
  const [code, setCode] = useState(
    `// Write your code here\nconsole.log("Hello World!");`
  );
  const [output, setOutput] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleEditorChange = (value: string) => {
    if (value === code) return;
    setCode(value || "");

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      handleRun();
    }, 2000);
  };

  const handleRun = () => {
    const logs: string[] = [];
    const customConsole = {
      log: (message: string) => logs.push(String(message)),
      error: (message: string) => logs.push(`Error: ${message}`),
      warn: (message: string) => logs.push(`Warning: ${message}`),
    };

    try {
      const result = new Function("console", code)(customConsole);
      if (result !== undefined) {
        logs.push(String(result));
      }
      setOutput(logs.join("\n"));
    } catch (error) {
      setOutput(`Error: ${error?.toString() as string}`);
    }
  };

  return (
    <div className="flex flex-col w-full h-full max-w-7xl mx-auto">
      <div className="flex-grow border border-zinc-700 rounded-t-lg overflow-hidden">
        <Editor
          className="w-full h-[600px]"
          defaultLanguage={language.toLowerCase()}
          language={language.toLowerCase()}
          defaultValue={code}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
          }}
          onChange={(e) => handleEditorChange(e?.toString() as string)}
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
