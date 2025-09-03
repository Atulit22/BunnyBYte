import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

export default function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  const { colors } = useTheme();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      
      // Insert 2 spaces for tab
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      onChange(newValue);
      
      // Move cursor to after the inserted spaces
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Simple syntax highlighting for JavaScript
  const highlightSyntax = (code: string) => {
    const keywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'extends', 'import', 'export', 'try', 'catch', 'throw', 'new'];
    const operators = ['===', '!==', '==', '!=', '<=', '>=', '<', '>', '&&', '||', '!'];
    const strings = /(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g;
    const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
    const numbers = /\b\d+(\.\d+)?\b/g;

    let highlighted = code;

    // Highlight comments
    highlighted = highlighted.replace(comments, '<span style="color: #6B7280; font-style: italic;">$1</span>');

    // Highlight strings
    highlighted = highlighted.replace(strings, '<span style="color: #10B981;">$1$2$1</span>');

    // Highlight keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span style="color: #8B5CF6; font-weight: bold;">${keyword}</span>`);
    });

    // Highlight numbers
    highlighted = highlighted.replace(numbers, '<span style="color: #F59E0B;">$&</span>');

    return highlighted;
  };

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`w-full h-96 p-4 bg-slate-900 ${colors.text} font-mono text-sm resize-none border-0 focus:outline-none focus:ring-0`}
        placeholder="Write your code here..."
        spellCheck={false}
        style={{
          tabSize: 2,
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", consolas, "source-code-pro", monospace',
          lineHeight: 1.5
        }}
      />
      
      {/* Line numbers */}
      <div className="absolute left-0 top-0 p-4 pointer-events-none select-none">
        <div className="font-mono text-sm text-slate-500">
          {value.split('\n').map((_, index) => (
            <div key={index} style={{ lineHeight: 1.5 }}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      
      {/* Syntax highlighting overlay */}
      <div 
        className="absolute left-12 top-0 p-4 pointer-events-none select-none opacity-0"
        style={{
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", consolas, "source-code-pro", monospace',
          fontSize: '14px',
          lineHeight: 1.5,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all'
        }}
        dangerouslySetInnerHTML={{ __html: highlightSyntax(value) }}
      />
    </div>
  );
}