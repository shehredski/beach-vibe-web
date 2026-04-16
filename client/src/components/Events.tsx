import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  date: string;
  month: string;
  title: string;
  time: string;
  description: string;
  attendees: string;
  type: 'dj' | 'party' | 'promotion' | 'special';
}

export default function Events() {
  const events: Event[] = [
    {
      id: 1,
      date: '21',
      month: 'Май',
      title: 'DJ Night - Summer Vibes',
      time: '21:00 - 03:00',
      description: 'Присъединете се към нас за незабравима DJ нощ с най-новите летни хитове!',
      attendees: '150+',
      type: 'dj'
    },
    {
      id: 2,
      date: '24',
      month: 'Май',
      title: 'Happy Hour Promotion',
      time: '18:00 - 20:00',
      description: 'Всички коктейли с 30% намаление! Идеално време за релакс след работа.',
      attendees: '50+',
      type: 'promotion'
    },
    {
      id: 3,
      date: '28',
      month: 'Май',
      title: 'Beach Party & BBQ',
      time: '19:00 - 23:00',
      description: 'Специална вечер с барбекю, музика и танци на плажа. Не пропускайте!',
      attendees: '200+',
      type: 'party'
    },
    {
      id: 4,
      date: '04',
      month: 'Юни',
      title: 'DJ International Night',
      time: '22:00 - 04:00',
      description: 'Световни DJ артисти на една нощ. Билети в ограничено количество!',
      attendees: '300+',
      type: 'dj'
    },
    {
      id: 5,
      date: '11',
      month: 'Юни',
      title: 'Sunset Cocktail Hour',
      time: '18:00 - 20:00',
      description: 'Наслаждайте се на специални коктейли докато слънцето залязва над морето.',
      attendees: '100+',
      type: 'special'
    },
    {
      id: 6,
      date: '18',
      month: 'Юни',
      title: 'Live Music Night',
      time: '20:00 - 23:00',
      description: 'Живо пеене и музика от местни таланти. Атмосфера пълна с енергия!',
      attendees: '120+',
      type: 'special'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'dj':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'party':
        return 'bg-pink-100 text-pink-800 border-pink-300';
      case 'promotion':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'special':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'dj':
        return '🎵 DJ Night';
      case 'party':
        return '🎉 Party';
      case 'promotion':
        return '🎁 Промоция';
      case 'special':
        return '✨ Специално';
      default:
        return 'Събитие';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Предстоящи Събития</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Открийте нашите най-интересни DJ нощи, парти и специални промоции. Резервирайте място си сега!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-blue-500"
            >
              {/* Event Date Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-sm opacity-90">{event.month}</div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEventTypeColor(event.type)}`}>
                  {getEventTypeLabel(event.type)}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>

                <div className="flex items-center gap-2 text-gray-600 pt-2 border-t border-gray-200">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.attendees} участници</span>
                </div>

                <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Резервирай място
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Искаш ли да организираш своето събитие?</h3>
          <p className="mb-4 text-blue-100">Свържи се с нас за специални предложения за корпоративни и приватни парти.</p>
          <a 
            href="tel:0888995528"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Позвони ни сега
          </a>
        </div>
      </div>
    </section>
  );
}
