import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { MsgError } from '../MsgError'

const Dropzone = ({ className, name, setValue, errors }) => {
  const [files, setFiles] = useState()

  const onDrop = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles })
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    )
    setValue(name, { file: acceptedFiles[0] })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.jpg,.png',
    multiple: false,
    maxFiles: 1
  })

  return (
    <div {...getRootProps({ className: `a ${className}` })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : files ? (
        files?.map((file, index) => (
          <img
            key={index}
            src={file.preview}
            className='h-full w-full rounded-[100%] object-cover'
          />
        ))
      ) : !errors ? (
        <span className='text-slate-400'>Selecciona una imagen</span>
      ) : (
        <MsgError errors={errors} />
      )}
    </div>
  )
}

export default Dropzone
