import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { AlertCircle, MapPin, Building2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function RegisterStep4({ formData, onDataChange, onNext, onPrevious, loading }) {
  const [errors, setErrors] = useState({})

  const validateStep = () => {
    const newErrors = {}

    if (!formData.deliveryMethod) {
      newErrors.deliveryMethod = 'Selecione um método de entrega'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Método de Entrega
        </h2>
        <p className="text-muted-foreground">
          Como você gostaria de receber seus fundos?
        </p>
      </div>

      {/* Informação */}
      <Alert className="bg-green-50 border-green-200">
        <AlertCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          Os dados bancários serão solicitados na próxima etapa, após a confirmação de sua identidade.
        </AlertDescription>
      </Alert>

      <Card className="shadow-lg border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Escolha sua Preferência</CardTitle>
          <CardDescription>
            Selecione como você deseja receber o dinheiro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={formData.deliveryMethod || ''}
            onValueChange={(value) => onDataChange('deliveryMethod', value)}
          >
            {/* Opção 1: Transferência Bancária */}
            <div className="relative">
              <input
                type="radio"
                id="bank"
                name="delivery"
                value="bank"
                checked={formData.deliveryMethod === 'bank'}
                onChange={() => onDataChange('deliveryMethod', 'bank')}
                className="hidden"
              />
              <label
                htmlFor="bank"
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.deliveryMethod === 'bank'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <RadioGroupItem value="bank" id="bank-radio" className="hidden" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.deliveryMethod === 'bank'
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {formData.deliveryMethod === 'bank' && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-foreground">Transferência Bancária</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receba o valor diretamente em sua conta bancária. Rápido e seguro.
                    </p>
                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <p>✓ Processamento em até 2 horas úteis</p>
                      <p>✓ Seguro e rastreável</p>
                      <p>✓ Sem taxas adicionais</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* Opção 2: Retirada Presencial */}
            <div className="relative">
              <input
                type="radio"
                id="pickup"
                name="delivery"
                value="pickup"
                checked={formData.deliveryMethod === 'pickup'}
                onChange={() => onDataChange('deliveryMethod', 'pickup')}
                className="hidden"
              />
              <label
                htmlFor="pickup"
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.deliveryMethod === 'pickup'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <RadioGroupItem value="pickup" id="pickup-radio" className="hidden" />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.deliveryMethod === 'pickup'
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {formData.deliveryMethod === 'pickup' && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-foreground">Retirada Presencial</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retire o dinheiro em espécie em uma de nossas unidades.
                    </p>
                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <p>✓ Disponível imediatamente</p>
                      <p>✓ Sem intermediários</p>
                      <p>✓ Múltiplas localizações</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </RadioGroup>

          {errors.deliveryMethod && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.deliveryMethod}
            </p>
          )}

          {/* Informação Adicional */}
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-sm font-medium mb-2">📋 Próximas Etapas:</p>
            <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
              <li>Confirmação de sua identidade</li>
              <li>
                {formData.deliveryMethod === 'bank'
                  ? 'Coleta de dados bancários'
                  : 'Seleção de local de retirada'}
              </li>
              <li>Revisão final e confirmação</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Botões de Navegação */}
      <div className="flex gap-3">
        <Button
          onClick={onPrevious}
          variant="outline"
          size="lg"
          className="flex-1"
          disabled={loading}
        >
          Voltar
        </Button>
        <Button
          onClick={handleNext}
          disabled={loading}
          size="lg"
          className="flex-1"
        >
          {loading ? 'Processando...' : 'Próximo'}
        </Button>
      </div>
    </div>
  )
}
