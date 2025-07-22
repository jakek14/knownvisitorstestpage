import React from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MemberList: React.FC = () => {
  const members = [
    { id: 1, name: "John Smith", email: "john.smith@techcorp.com", phone: "+1 (555) 123-4567", date: "2024-01-15" },
    { id: 2, name: "Sarah Johnson", email: "sarah.j@designstudio.com", phone: "+1 (555) 234-5678", date: "2024-01-14" },
    { id: 3, name: "Mike Wilson", email: "mike.wilson@marketingpro.com", phone: "+1 (555) 345-6789", date: "2024-01-13" },
    { id: 4, name: "Emily Davis", email: "emily.d@startupinc.com", phone: "+1 (555) 456-7890", date: "2024-01-12" },
    { id: 5, name: "David Brown", email: "david.brown@consulting.com", phone: "+1 (555) 567-8901", date: "2024-01-11" },
    { id: 6, name: "Lisa Garcia", email: "lisa.garcia@digitalagency.com", phone: "+1 (555) 678-9012", date: "2024-01-10" },
    { id: 7, name: "Alex Chen", email: "alex.chen@innovate.com", phone: "+1 (555) 789-0123", date: "2024-01-09" },
    { id: 8, name: "Maria Rodriguez", email: "maria.r@creative.com", phone: "+1 (555) 890-1234", date: "2024-01-08" }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Date']
    const csvContent = [
      headers.join(','),
      ...members.map(member => [
        member.name,
        member.email,
        member.phone,
        formatDate(member.date)
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'member-list.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full relative">
      {/* Desktop Table - Full columns */}
      <div className="hidden md:block">
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 grid grid-cols-4">
            <div className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Name
              </div>
            </div>
            <div className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Phone
              </div>
            </div>
            <div className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Email
              </div>
            </div>
            <div className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Date
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <div key={member.id} className="grid grid-cols-4 hover:bg-gray-50">
                <div className="py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.name}
                  </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.phone}
                  </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.email}
                  </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                  <div className="text-left">
                    {formatDate(member.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Table - Names and Phones only */}
      <div className="md:hidden">
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 grid grid-cols-2">
            <div className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Name
              </div>
            </div>
            <div className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Phone
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-white divide-y divide-gray-200">
            {members.map((member) => (
              <div key={member.id} className="grid grid-cols-2 hover:bg-gray-50">
                <div className="py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.name}
                  </div>
                </div>
                <div className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Export button positioned in top right corner */}
      <Button
        onClick={exportToCSV}
        variant="outline"
        size="sm"
        className="absolute top-2 right-2 h-8 w-8 p-0 bg-white border-gray-300 hover:bg-gray-50 shadow-sm"
      >
        <Download className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default MemberList 