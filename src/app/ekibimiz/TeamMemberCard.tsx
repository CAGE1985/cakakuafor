'use client';

import Image from "next/image";

interface TeamMemberCardProps {
  member: string;
  index: number;
}

// Türkçe karakterleri İngilizce karakterlere çeviren fonksiyon
function getFileName(member: string): string {
  // Manuel eşleştirme - dosya isimleriyle tam uyumlu
  const nameMapping: { [key: string]: string } = {
    'TARIK': 'tarik.jpeg',
    'BİRKAN': 'birkan.jpeg',
    'BARIŞ': 'baris.jpeg',
    'ENBİYA': 'enbiya.jpeg',
    'AYDIN': 'aydin.jpeg',
    'ŞEREF': 'seref.jpeg',
    'İHSAN': 'ihsan.jpeg',
    'MEHMET': 'mehmet.jpeg',
    'BURÇİN': 'burcin.jpeg',
    'BURCU': 'burcu.jpeg',
    'ALPER': 'alper.jpeg',
    'HAVVA': 'havva.jpeg',
    'EGEMEN': 'egemen.jpeg',
    'ERAY': 'eray.jpeg',
    'GULCE': 'gulce.jpeg',
    'MİRAÇ': 'mirac.jpeg'
  };
  
  return nameMapping[member] || `${member.toLowerCase()}.jpeg`;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
        <Image
          src={`/ekip/${getFileName(member)}`}
          alt={member}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to placeholder if image doesn't exist
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                  <div class="text-center">
                    <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                      ${member.charAt(0)}
                    </div>
                    <div class="text-gray-600 font-medium">Fotoğraf Yükleniyor</div>
                  </div>
                </div>
              `;
            }
          }}
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
          {member}
        </h3>
      </div>
    </div>
  );
}
