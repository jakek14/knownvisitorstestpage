import React from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MemberList: React.FC = () => {
  const members = [
    { id: 1, name: "John Smith", email: "john.smith@techcorp.com", address: "123 Main St, San Francisco, CA 94102", phone: "+1 (555) 123-4567" },
    { id: 2, name: "Sarah Johnson", email: "sarah.j@designstudio.com", address: "456 Oak Ave, New York, NY 10001", phone: "+1 (555) 234-5678" },
    { id: 3, name: "Mike Wilson", email: "mike.wilson@marketingpro.com", address: "789 Pine Rd, Austin, TX 73301", phone: "+1 (555) 345-6789" },
    { id: 4, name: "Emily Davis", email: "emily.d@startupinc.com", address: "321 Elm Blvd, Seattle, WA 98101", phone: "+1 (555) 456-7890" },
    { id: 5, name: "David Brown", email: "david.brown@consulting.com", address: "654 Maple Dr, Boston, MA 02101", phone: "+1 (555) 567-8901" },
    { id: 6, name: "Lisa Garcia", email: "lisa.garcia@digitalagency.com", address: "987 Cedar Ln, Miami, FL 33101", phone: "+1 (555) 678-9012" },
    { id: 7, name: "Alex Chen", email: "alex.chen@innovate.com", address: "147 Birch Way, Denver, CO 80201", phone: "+1 (555) 789-0123" },
    { id: 8, name: "Maria Rodriguez", email: "maria.r@creative.com", address: "258 Spruce Ct, Portland, OR 97201", phone: "+1 (555) 890-1234" }
  ]

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Address', 'Phone']
    const csvContent = [
      headers.join(','),
      ...members.map(member => [
        member.name,
        member.email,
        member.address,
        member.phone
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
                Address
              </div>
            </div>
            <div className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Email
              </div>
            </div>
            <div className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-center">
              <div className="text-left">
                Phone
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
                    {member.address}
                  </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.email}
                  </div>
                </div>
                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex justify-center">
                  <div className="text-left">
                    {member.phone}
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
                <div className="px-4 py-4 text-sm text-gray-900 flex justify-center">
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