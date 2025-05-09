
import { useState } from "react";
import { Eye, Calendar, Info } from "lucide-react";
import { Donor } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { donationRecords } from "@/utils/data";

interface DonorListProps {
  donors: Donor[];
}

const DonorList = ({ donors }: DonorListProps) => {
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleViewDonor = (donor: Donor) => {
    setSelectedDonor(donor);
    setIsViewModalOpen(true);
  };
  
  const getDonorDonations = (donorId: string) => {
    return donationRecords.filter(record => record.donorId === donorId);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Donation
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donors.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-sm text-gray-500">
                    No donors found
                  </td>
                </tr>
              ) : (
                donors.map((donor) => (
                  <tr key={donor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {donor.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donor.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        donor.bloodType.includes('O') ? 'bg-green-100 text-green-800' : 
                        donor.bloodType.includes('A') ? 'bg-blue-100 text-blue-800' :
                        donor.bloodType.includes('B') ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {donor.bloodType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {donor.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {donor.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {donor.lastDonation ? new Date(donor.lastDonation).toLocaleDateString() : 'Never'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        donor.eligibleToDonate ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {donor.eligibleToDonate ? 'Eligible' : 'Not Eligible'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary/80"
                        onClick={() => handleViewDonor(donor)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Donor Detail Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="max-w-3xl">
          {selectedDonor && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Donor Information</DialogTitle>
                <DialogDescription>
                  Complete profile information for {selectedDonor.name}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Name:</span>
                      <span className="font-medium">{selectedDonor.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Email:</span>
                      <span className="font-medium">{selectedDonor.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Phone:</span>
                      <span className="font-medium">{selectedDonor.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Gender:</span>
                      <span className="font-medium">{selectedDonor.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Age:</span>
                      <span className="font-medium">{selectedDonor.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Weight:</span>
                      <span className="font-medium">{selectedDonor.weight} lbs</span>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mt-6 mb-2">Medical Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Blood Type:</span>
                      <span className="font-medium">{selectedDonor.bloodType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Eligibility:</span>
                      <span className={`font-medium ${selectedDonor.eligibleToDonate ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedDonor.eligibleToDonate ? 'Eligible to donate' : 'Not eligible'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Last Donation:</span>
                      <span className="font-medium">
                        {selectedDonor.lastDonation ? new Date(selectedDonor.lastDonation).toLocaleDateString() : 'Never donated'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Medical Conditions:</span>
                      {selectedDonor.medicalConditions.length > 0 ? (
                        <ul className="list-disc list-inside mt-1">
                          {selectedDonor.medicalConditions.map((condition, idx) => (
                            <li key={idx} className="text-sm">{condition}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-1 text-sm">None reported</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Address</h4>
                  <p className="text-sm">
                    {selectedDonor.address}<br />
                    {selectedDonor.city}, {selectedDonor.state} {selectedDonor.zipCode}
                  </p>
                  
                  <h4 className="font-medium text-gray-900 mt-6 mb-2">Donation History</h4>
                  {getDonorDonations(selectedDonor.id).length > 0 ? (
                    <div className="space-y-2">
                      {getDonorDonations(selectedDonor.id).map((donation) => (
                        <div key={donation.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                              <span className="text-sm">{new Date(donation.donationDate).toLocaleDateString()}</span>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              donation.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                              donation.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {donation.status}
                            </span>
                          </div>
                          <div className="text-sm flex gap-2">
                            <span className="text-gray-500">Amount:</span>
                            <span>{donation.bloodAmount} ml</span>
                          </div>
                          <div className="text-sm flex gap-2">
                            <span className="text-gray-500">Center:</span>
                            <span>{donation.center}</span>
                          </div>
                          {donation.notes && (
                            <div className="flex items-start gap-1 mt-2 text-xs text-gray-500">
                              <Info className="h-4 w-4 text-gray-400 flex-shrink-0" />
                              <p>{donation.notes}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No donation records found.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonorList;
