import React, { useEffect, useState } from 'react'

const useDocumentTitle = title => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
}

export { useDocumentTitle };
