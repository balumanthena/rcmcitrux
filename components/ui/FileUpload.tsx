'use client';

import { useCallback, useState } from 'react';

export default function FileUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <section className="mb-8">
      <label className="block mb-2 font-semibold text-gray-700">Upload Claim File (PDF/CSV)</label>
      <input
        type="file"
        accept=".pdf,.csv"
        onChange={onFileChange}
        className="block w-full rounded-xl border border-gray-300 p-3 cursor-pointer"
      />
      {preview && (
        <div className="mt-4 p-4 border border-gray-200 bg-white rounded-xl shadow-soft overflow-auto">
          <p className="font-semibold mb-2">Preview:</p>
          <iframe
            src={preview}
            title="File Preview"
            className="w-full h-64"
            sandbox=""
          />
        </div>
      )}
    </section>
  );
}
