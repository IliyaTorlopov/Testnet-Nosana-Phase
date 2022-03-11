class Bar:
    bar_name = ''
    staff = []
    def hire(self, barmen):
        self.staff.append(barmen)
class Man:
    pass

class Barmen(Bar, Man):
    def __init__(self, bar):
        self.work_place = bar
    def report(self):
        print('В баре {} все хорошо'.format(self.work_place.bar_name))

good_idea = Bar()
good_idea.bar_name = 'Хорошая Идея'
print(good_idea.bar_name)

barmen = Barmen(good_idea)
good_idea.hire(barmen)
barmen.report()
