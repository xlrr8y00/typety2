import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Edit2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function RegisterStep6({ formData, onPrevious, onSubmit, loading }) {
  const maskEmail = (email) => {
    const [name, domain] = email.split('@')
    return `${name.substring(0, 2)}***@${domain}`
  }

  const maskPhone = (phone) => {
    return phone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-***')
  }

  const maskBankAccount = (account) => {
    return account.replace(/\d(?=\d{2})/g, '*')
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Revisão Final
        </h2>
        <p className="text-muted-foreground">
          Verifique seus dados antes de confirmar
        </p>
      </div>

      {/* Aviso de Confirmação */}
      <Alert className="bg-green-50 border-green-200">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          Todos os seus dados foram validados com sucesso. Revise as informações abaixo.
        </AlertDescription>
      </Alert>

      {/* Dados Pessoais */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Dados Pessoais</CardTitle>
              <CardDescription>Informações de identificação</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              className="text-blue-600 hover:text-blue-700"
            >
              <Edit2 className="w-4 h-4 mr-1" />
              Editar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Nome Completo</p>
              <p className="font-medium">{formData.fullName}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="font-medium">{maskEmail(formData.email)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Telefone</p>
              <p className="font-medium">{maskPhone(formData.phone)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Nacionalidade</p>
              <p className="font-medium">{formData.nationality}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Endereço</p>
            <p className="font-medium">{formData.address}</p>
          </div>
        </CardContent>
      </Card>

      {/* Documentos */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Documentos</CardTitle>
          <CardDescription>Verificação de identidade</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-xs text-muted-foreground">Documento</p>
                <p className="font-medium text-sm">{formData.documentFile?.name || 'Enviado'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-xs text-muted-foreground">Selfie</p>
                <p className="font-medium text-sm">{formData.selfieFile?.name || 'Enviada'}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Método de Entrega */}
      <Card className="shadow-lg border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Método de Entrega</CardTitle>
          <CardDescription>Como você receberá seus fundos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium mb-1">
              {formData.deliveryMethod === 'bank' ? '🏦 Transferência Bancária' : '📍 Retirada Presencial'}
            </p>
            <p className="text-xs text-muted-foreground">
              {formData.deliveryMethod === 'bank'
                ? 'Você receberá a transferência em sua conta bancária'
                : 'Você retirará o dinheiro em uma de nossas unidades'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Dados Bancários (se aplicável) */}
      {formData.deliveryMethod === 'bank' && (
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Dados Bancários</CardTitle>
            <CardDescription>Informações para transferência</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Banco</p>
                <p className="font-medium">{formData.bankName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Agência</p>
                <p className="font-medium">{formData.bankAgency}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Conta</p>
                <p className="font-medium">{maskBankAccount(formData.bankAccount)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Titular</p>
                <p className="font-medium">{formData.accountHolder}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Termos e Condições */}
      <Alert className="bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 text-sm">
          Ao confirmar, você concorda com nossos Termos de Serviço e Política de Privacidade. Seus dados serão processados de acordo com a LGPD.
        </AlertDescription>
      </Alert>

      {/* Botões de Ação */}
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
          onClick={onSubmit}
          disabled={loading}
          size="lg"
          className="flex-1"
        >
          {loading ? 'Processando...' : 'Confirmar Cadastro'}
        </Button>
      </div>

      {/* Informação Final */}
      <div className="text-center text-xs text-muted-foreground">
        <p>Seu cadastro será revisado em até 24 horas</p>
      </div>
    </div>
  )
}
