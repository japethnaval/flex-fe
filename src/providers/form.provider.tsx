/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, ReactNode, useEffect } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form'
import { GenericObject } from 'types/globals'
import { z } from 'zod'

export type FormModes = 'all' | 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched'

export type HookFormContextProps = {
  onSubmit: SubmitHandler<FieldValues>
}
export const HookFormContext = createContext<HookFormContextProps>(
  {} as HookFormContextProps,
)

export const HookFormProvider = ({
  children,
  schema,
  mode,
  defaultValues,
  onSubmit,
  id,
}: {
  mode?: FormModes
  id?: string
  defaultValues?: GenericObject
  schema?: z.ZodObject<GenericObject>
  children: ReactNode
  onSubmit: SubmitHandler<FieldValues>
}) => {
  const methods = useForm({
    defaultValues,
    mode: mode || 'onSubmit',
    resolver: schema ? zodResolver(schema) : undefined,
  })

  useEffect(() => {
    if (
      methods.formState.isSubmitSuccessful &&
      window.location.pathname !== '/'
    ) {
      methods.reset()
    }
  }, [methods, methods.formState.isSubmitSuccessful])

  return (
    <FormProvider {...methods}>
      <HookFormContext.Provider value={{ onSubmit }}>
        <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </HookFormContext.Provider>
    </FormProvider>
  )
}

export default HookFormProvider
